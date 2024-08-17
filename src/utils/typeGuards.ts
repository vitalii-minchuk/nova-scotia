import type { TActionsGenericResponse } from '@/actions/types';

export function isResponseTActionsGenericResponse(
  response: unknown
): response is TActionsGenericResponse {
  return (
    (response as TActionsGenericResponse)?.success !== undefined ||
    (response as TActionsGenericResponse)?.message !== undefined
  );
}
