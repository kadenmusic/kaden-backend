import { HttpMethodType } from "../../config/enums";
import { showErrorToast } from "../toast/toast.service";

export const makeRequest = async (
  method: HttpMethodType,
  url: string,
  headers: any,
  body?: any,
): Promise<any> => {
  // TODO: Configurable x-www-form-urlencoded vs. JSON
  const formBody = !!body
    ? Object.keys(body)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(body[key]),
        )
        .join("&")
    : null;

  const options = {
    method,
    headers: headers,
    body: formBody,
  };

  // TODO: Get rid of try catches and use a global handler for errors
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    showErrorToast(error);
  }
};
