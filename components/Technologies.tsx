import React from "react";

export default function ({
  js,
  html,
  css,
  react,
  reactn,
  redux,
  next,
  node,
  express,
  postgresql,
  sequelize,
  sql,
  firebase,
}: {
  js: boolean,
  html: boolean,
  css: boolean,
  react: boolean
  reactn: boolean,
  redux: boolean,
  next: boolean,
  node: boolean,
  express: boolean,
  postgresql: boolean,
  sequelize: boolean,
  sql: boolean,
  firebase: boolean,
}) {
  return (
    <>
      { js && <div className="icon bg-javascript"></div> }
      { html && <div className="icon bg-html"></div> }
      { css && <div className="icon bg-react"></div> }
      { react && <div className="icon bg-css"></div> }
      { reactn && <div className="icon bg-reactnative"></div> }
      { redux && <div className="icon bg-redux"></div> }
      { next && <div className="icon bg-next"></div> }
      { node && <div className="icon bg-node"></div> }
      { express && <div className="icon bg-express"></div> }
      { postgresql && <div className="icon bg-postgresql"></div> }
      { sequelize && <div className="icon bg-sequelize"></div> }
      { sql && <div className="icon bg-sql"></div> }
      { firebase && <div className="icon bg-firebase"></div> }
    </> 
  );
}
