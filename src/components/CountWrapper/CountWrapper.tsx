import { countChildren } from "@/utils/countChildren";
import { FunctionComponent, PropsWithChildren } from "react";

export const CountWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const count = countChildren(children);

    console.log(`Children:${count}`);
    return <>{children}</>;
};
