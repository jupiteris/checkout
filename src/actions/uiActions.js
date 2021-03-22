export const OPEN_SCHEDULE = '@ui/schedule-open';
export const FINISH_SCHEDULE = '@ui/schedule-finished';
export const OPEN_CONTACT_INFO = '@ui/contact-open';
export const FINISH_CONTACT_INFO = '@ui/contact-finished';
export const OPEN_PAYMENT_INFO = '@ui/payment-open';
export const FINISH_PAYMENT_INFO = '@ui/payment-finished';

export function expandSchedule(val) {
  return dispatch => dispatch({ type: OPEN_SCHEDULE, payload: val });
}

export function completeSchedule(val) {
  return dispatch => dispatch({ type: FINISH_SCHEDULE, payload: val });
}

export function expandContactInfo(val) {
  return dispatch => dispatch({ type: OPEN_CONTACT_INFO, payload: val });
}

export function completeContactInfo(val) {
  return dispatch => dispatch({ type: FINISH_CONTACT_INFO, payload: val });
}

export function expandPaymentInfo(val) {
  return dispatch => dispatch({ type: OPEN_PAYMENT_INFO, payload: val });
}

export function completePaymentInfo(val) {
  return dispatch => dispatch({ type: FINISH_PAYMENT_INFO, payload: val });
}
