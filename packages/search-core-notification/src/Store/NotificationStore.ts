import { test } from "search/lib/index";
import { getNotification } from "../API/NotificationAPIUtils";

export const NotificationScenario = test(
  getNotification
);
