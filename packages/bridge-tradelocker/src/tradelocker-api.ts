import 'dotenv/config';

const TRADELOCKER_API_URL = process.env.TRADELOCKER_API_URL || 'https://demo.tradelocker.com/backend-api';
const TRADELOCKER_EMAIL = process.env.TRADELOCKER_EMAIL;
const TRADELOCKER_PASSWORD = process.env.TRADELOCKER_PASSWORD;
const TRADELOCKER_SERVER = process.env.TRADELOCKER_SERVER;

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  refreshTokenExpires: number;
}

export class TradeLockerApiClient {
  private apiUrl: string;
  private email?: string;
  private password?: string;
  private server?: string;
  private accessToken: string | null = null;

  constructor() {
    this.apiUrl = TRADELOCKER_API_URL;
    this.email = TRADELOCKER_EMAIL;
    this.password = TRADELOCKER_PASSWORD;
    this.server = TRADELOCKER_SERVER;

    if (!this.email || !this.password || !this.server) {
      throw new Error(
        'TradeLocker credentials (email, password, server) are not configured in environment variables.'
      );
    }
  }

  public async connect(): Promise<void> {
    try {
      console.log('[TradeLocker API] Authenticating...');
      const response = await fetch(`${this.apiUrl}/auth/jwt/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          server: this.server,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to authenticate with TradeLocker API: ${response.status} ${errorData}`);
      }

      const { accessToken } = (await response.json()) as AuthResponse;
      this.accessToken = accessToken;

      console.log('[TradeLocker API] Successfully authenticated.');
    } catch (error) {
      console.error('[TradeLocker API] Connection failed:', error);
      throw error;
    }
  }

  private async makeApiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    if (!this.accessToken) {
      throw new Error('Not authenticated. Please call connect() first.');
    }

    const response = await fetch(`${this.apiUrl}/${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`API request to ${endpoint} failed: ${response.status} ${errorData}`);
    }

    return response.json() as Promise<T>;
  }

  public async getAccounts(): Promise<any[]> {
    try {
      console.log('[TradeLocker API] Fetching accounts...');
      const accounts = await this.makeApiRequest<any[]>('auth/jwt/all-accounts');
      console.log(`[TradeLocker API] Found ${accounts.length} account(s).`);
      return accounts;
    } catch (error) {
      console.error('[TradeLocker API] Failed to fetch accounts:', error);
      throw error;
    }
  }

  public async getPositions(accNum: number): Promise<any[]> {
    try {
      console.log(`[TradeLocker API] Fetching positions for account number ${accNum}...`);
      const positions = await this.makeApiRequest<any[]>('trade/positions', {
        headers: {
          accNum: accNum.toString(),
        },
      });
      console.log(`[TradeLocker API] Found ${positions.length} position(s).`);
      return positions;
    } catch (error) {
      console.error(`[TradeLocker API] Failed to fetch positions for account ${accNum}:`, error);
      throw error;
    }
  }

  // We will add methods here to get trades, etc.
}
