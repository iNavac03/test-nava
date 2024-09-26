"use client";
import React from "react";
import { UiNotifications } from "@uireact/notifications";

import { UiView } from "@uireact/view";

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => (
  <UiView>
    <UiNotifications />
    {children}
  </UiView>
);
