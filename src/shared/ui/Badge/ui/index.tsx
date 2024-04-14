
import styles from "./index.module.scss"
import React, {FC, PropsWithChildren} from "react";
import classNames from "classnames";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Badge: FC<PropsWithChildren<BadgeProps>> = (
    {
        children,
        className,
        ...props
    }
) => {

    return (
        <div className={classNames(styles.badge, className)} {...props}>
            {children}
        </div>
    )
}

export {
    Badge
}