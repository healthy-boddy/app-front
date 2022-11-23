import { AxiosError, AxiosResponse } from 'axios';

export class HttpLogger {
  public logRequestSuccess(response: AxiosResponse) {
    console.log(
      `${response.config.method?.toUpperCase()} ${response.config.url}: 200 OK`
    );
  }

  public logRequestFailed(error: AxiosError) {
    console.log(
      `${error.config.method?.toUpperCase() ?? ''} ${
        error.config.url
      }: failed with status code ${error.response?.status}!`
    );
  }

  public logRetrySuccess(response: AxiosResponse) {
    console.log(
      `Retry ${response.config.method?.toUpperCase() ?? ''} ${
        response.config.url
      }: 200 OK`
    );
  }

  public logRetryFailed(error: AxiosError) {
    console.log(
      `Retry ${error.config.method?.toUpperCase() ?? ''} ${
        error.config.url
      }: failed with status code ${error.response?.status}!`
    );
  }

  public logNewTokens(
    response: AxiosResponse<{ token: string; refresh_token: string }>
  ) {
    console.log(`Tokens have been refreshed silently:`);
    console.log(`Access token: ${response.data.token}`);
    console.log(`Refresh token: ${response.data.refresh_token}`);
  }
}
