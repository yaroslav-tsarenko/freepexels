import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import "./BlogSingleBlockDesktop.css";

export type BlogSingleBlockDesktopType = {
  blogImage?: string;
  titleLabel?: string;
  loremIpsumDolorSitAmetCon?: string;
  tag?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const BlogSingleBlockDesktop: FunctionComponent<BlogSingleBlockDesktopType> = ({
  blogImage,
  titleLabel,
  loremIpsumDolorSitAmetCon,
  tag,
  propWidth,
}) => {
  const tagStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="blog-single-block-desktop">
      <img className="blog-image" alt="" src={blogImage} />
      <div className="category-label">category label</div>
      <h3 className="title-label">{titleLabel}</h3>
      <div className="lorem-ipsum-dolor">{loremIpsumDolorSitAmetCon}</div>
      <Button
        className="tag"
        startIcon={<img width="16px" height="16px" src="/tag-icon.svg" />}
        disableElevation={true}
        variant="contained"
        sx={{
          color: "#1d1d1d",
          fontSize: "12",
          background: "#f2f8ff",
          borderRadius: "999px",
          "&:hover": { background: "#f2f8ff" },
          width: 96,
          height: 38,
        }}
        style={tagStyle}
      >
        {tag}
      </Button>
    </div>
  );
};

export default BlogSingleBlockDesktop;
