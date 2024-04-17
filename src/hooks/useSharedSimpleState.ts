import { useState } from "react";

import { getUserStorage } from "@/utils";

export const useSharedSimpleState = () => {
  const [user, setUser] = useState(getUserStorage());
  return [user, setUser];
};
