const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[120rem] overflow-clip px-[2rem] md:px-[5rem] lg:px-[9rem]">
      {children}
    </div>
  );
};

export default Container;
