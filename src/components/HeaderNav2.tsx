import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./HeaderNav2.css";

export type HeaderNav2Type = {
  expressThePowerOfYourIdea?: string;
  foundedIn2021WereTheOneSt?: string;
  frame25?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const HeaderNav2: FunctionComponent<HeaderNav2Type> = ({
  expressThePowerOfYourIdea,
  foundedIn2021WereTheOneSt,
  frame25,
  propBackgroundColor,
  propPadding,
  propLineHeight,
}) => {
  const headerNavStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const expressThePowerStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <section className="header-nav5" style={headerNavStyle}>
      <div className="express-power-wrapper" style={frameDivStyle}>
        <div className="express-power">
          <h1 className="express-the-power" style={expressThePowerStyle}>
            {expressThePowerOfYourIdea}
          </h1>
          <div className="founded-in-2021">{foundedIn2021WereTheOneSt}</div>
        </div>
      </div>
      <img className="header-nav-child" loading="lazy" alt="" src={frame25} />
    </section>
  );
};

export default HeaderNav2;
