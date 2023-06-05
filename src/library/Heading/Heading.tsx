import { createElement } from "react";
import { headingStyles } from "./Heading.styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface HeadingProps {
  title: string;
  titleIcon?: IconDefinition;
  subtitle?: string;
  subtitleIcon?: IconDefinition;
  level?: number;
}

/**
 * Title and subtitle headings
 */
export const Heading = (props: HeadingProps) => {
  const { title, titleIcon, subtitle, subtitleIcon, level = 1 } = props;
  const classes = headingStyles();

  return (
    <header className={classes.root}>
      {createElement(`h${level}`, {
        className: classes.title,
        children: (
          <>
            {titleIcon && (
              <FontAwesomeIcon 
                icon={titleIcon} 
                className={classes.titleIcon} 
              />
            )}
            <span className={classes.titleText}>
              {title}
            </span>
            {subtitle && (
              <small className={classes.subtitle}>
                {subtitleIcon && (
                  <FontAwesomeIcon
                    icon={subtitleIcon}
                    className={classes.subtitleIcon}
                  />
                )}
                <span className={classes.subtitleText}>
                  {subtitle}
                </span>
              </small>
            )}
          </>
        )
      })}
    </header>
  );
};
