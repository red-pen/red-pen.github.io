import React from "react";
import { ErrorInfo } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface IProps {
  tips?: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<IProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  public static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  public componentDidCatch = (error: Error, info: ErrorInfo) => {
    console.error("error: ", error?.message, error?.stack?.toString());
    console.log("infos: ", info.componentStack);
  };

  public render() {
    return <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "16px", marginBottom: "16px", textAlign: "center" }}>
          {this.props.tips || (
            <>
              哎呀！！页面出现了一些问题。
              <br />
              请联系管理员报告该问题。
            </>
          )}
        </div>
      </div>
  }
}
