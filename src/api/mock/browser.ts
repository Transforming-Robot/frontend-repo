import { setupWorker } from 'msw';
import { userRegisterHandlers } from './userRegisterHandlers';
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...userRegisterHandlers);
