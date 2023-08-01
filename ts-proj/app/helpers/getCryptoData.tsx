import { APIBase, APIKey } from "../api/api";
import { CryptoData } from "../modules/ICrypto";

interface GetCryptoDataParams {
    cryptoName: string;
    fiatPair: string;
  }

export async function getCryptoData({ cryptoName, fiatPair }: GetCryptoDataParams): Promise<CryptoData> {
    const response = await fetch(`${APIBase}/${cryptoName}/${fiatPair}/${APIKey}`, {
        next: {
            revalidate: 60,
        }
    });

    if(!response.ok) {
        throw new Error('Unable to fetching :-(')
    }

    const data = await response.json();

    return data;
}