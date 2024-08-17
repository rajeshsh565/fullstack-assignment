import { abstract, community, company, resources } from "../utils/footerData";
import abstractLogo from "../assets/abstract_icon.jpg";

const FooterComp = () => {
  return (
    <div className="w-full bg-black text-white grid grid-cols-2 md:grid-cols-4 px-8 py-4 gap-4">
      <div>
        <h2 className="font-bold mb-2">Abstract</h2>
        <div className="flex flex-col">
          {abstract.map((data, i) => {
            return <a href={data.path} className="text-sm" key={(i+1)*(Math.random().toFixed(2))}>{data.text}</a>;
          })}
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-2">Resources</h2>
        <div className="flex flex-col">
          {resources.map((data, i) => {
            return <a href={data.path} className="text-sm" key={(i+1)*(Math.random().toFixed(2))}>{data.text}</a>;
          })}
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-2">Community</h2>
        <div className="flex flex-col">
          {community.map((data, i) => {
            return <a href={data.path} className="text-sm" key={(i+1)*(Math.random().toFixed(2))}>{data.text}</a>;
          })}
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-2">Company</h2>
        <div className="flex flex-col mb-4">
          {company.map((data, i) => {
            return <a href={data.path} className="text-sm" key={(i+1)*(Math.random().toFixed(2))}>{data.text}</a>;
          })}
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
        <h2 className="font-bold mb-2">Contact Us</h2>
        <p className="text-sm break-words">info@abstract.com</p>
        </div>
        <div>
        <img src={abstractLogo} className="w-7 object-cover rounded-lg"></img>
        <div className="text-sm">
          <p>&copy; Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default FooterComp;
