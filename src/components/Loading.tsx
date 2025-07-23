const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[300px] h-[300px]">
        <div className="loader" id="loader"></div>
        <div className="loader" id="loader2"></div>
        <div className="loader" id="loader3"></div>
        <div className="loader" id="loader4"></div>
        <span id="text">LOADING...</span>
        <span className="loading-text">LOADING...</span>
      </div>
    </div>
  );
};

export default Loading;
