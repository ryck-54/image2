interface TamplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TamplateProps) => {
  return(
    <>
    //header
    { children}
    //fooster
    </>
  );
}

const Header: React.FC = () => {
  return(
    <header className="bg-indigo-950-text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>ImageLite</h1>
      </div>
    </header>
  );
}

const Footer: React.FC = () => {
  return(
    <header className="bg-indigo-950-text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center px-4">
        <h1>Footer</h1>
      </div>
    </header>
  );
}