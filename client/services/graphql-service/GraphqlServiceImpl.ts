export class GraphqlServiceImpl {
  private apiUrl: string;
  private jwtToken: string | undefined;

  constructor(apiUrl: string, jwtToken?: string) {
    this.apiUrl = apiUrl;
    if (jwtToken) {
      this.jwtToken = jwtToken;
    }
  }

  protected async fetchQuery(query: string) {
    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.jwtToken}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json.data;
  }
}
