import React, { useState } from "react";
import { Tag, Button, Avatar } from "antd";
import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { IData_SnippetNews } from "./types";
import "./NewsSnippet.scss";

interface Props {
  data: IData_SnippetNews;
}

const NewsSnippet: React.FC<Props> = ({ data }) => {
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const highlightsToShow = showAllHighlights
    ? data.HIGHLIGHTS
    : data.HIGHLIGHTS.slice(0, 1);

  const highlightKeywords = (text: string) => {
    let result = text;
    data.KW.forEach((tag) => {
      result = result.replace(
        new RegExp(
          `(?!<b>)(?<![\\w-])(${tag.value})(?![\\w-])(?!(<\\/b>))`,
          "gi"
        ),
        `<span class="highlight-keyword">$1</span>`
      );
    });
    return result;
  };

  return (
    <div className="news-snippet">
      <div className="news-top-row">
        <span className="news-date">
          {new Date(data.DP).toLocaleDateString()}
        </span>
        <span className="news-reach">{data.REACH.toLocaleString()}K Reach</span>
        <span className="news-traffic">
          Top Traffic:{" "}
          {data.TRAFFIC.map((t, i) => (
            <span key={t.value}>
              {t.value} {Math.round(t.count * 100)}%
              {i < data.TRAFFIC.length - 1 && ", "}
            </span>
          ))}
        </span>
        <span className="news-country">{data.CNTR}</span>
        <span className="news-lang">{data.LANG.toUpperCase()}</span>
        <span className={`news-sentiment ${data.SENT}`}>
          {data.SENT === "positive" ? <LikeOutlined /> : <DislikeOutlined />}
        </span>
        <div className="news-social">
          <TwitterOutlined />
          <FacebookOutlined />
          <LinkedinOutlined />
        </div>
      </div>

      <a
        className="news-title"
        href={data.URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.TI}
      </a>

      <div className="news-source-row">
        <Avatar src={data.FAV} shape="square" size={20} />
        <span className="news-domain">{data.DOM}</span>
        <span className="news-country-flag">{data.CNTR}</span>
        {data.AU.length > 0 && (
          <span className="news-authors">
            <UserOutlined /> {data.AU.join(", ")}
          </span>
        )}
      </div>

      <div className="news-highlights">
        {highlightsToShow.map((hl, i) => (
          <div
            key={i}
            className="news-highlight"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(hl) }}
          />
        ))}
        {data.HIGHLIGHTS.length > 1 && (
          <Button
            type="link"
            className="show-more"
            onClick={() => setShowAllHighlights((v) => !v)}
            size="small"
          >
            {showAllHighlights ? "Show less" : "Show more"}
          </Button>
        )}
      </div>

      <div className="news-tags">
        {data.KW.slice(0, 5).map((tag) => (
          <Tag key={tag.value}>
            {tag.value} {tag.count > 1 && <span>{tag.count}</span>}
          </Tag>
        ))}
        {data.KW.length > 5 && (
          <Button type="link" size="small" className="show-all-tags">
            Show All +{data.KW.length - 5}
          </Button>
        )}
      </div>

      <div className="news-actions-row">
        <Button type="link" href={data.URL} target="_blank" size="small">
          Original Source
        </Button>
        <span className="news-duplicates">
          Duplicates: <b>192</b>
        </span>
        <Button size="small" className="view-duplicates">
          View Duplicates
        </Button>
        <span className="news-sort">By Relevance</span>
      </div>
    </div>
  );
};

export default NewsSnippet;
