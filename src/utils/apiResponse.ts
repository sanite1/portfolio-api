export interface ApiResponseShape<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const apiResponse = <T>(
  message: string,
  data?: T
): ApiResponseShape<T> => ({
  success: true,
  message,
  data,
});
