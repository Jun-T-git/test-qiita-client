import React, { useState } from 'react';
import Link from 'next/link';

const Auth: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [apiSecret, setApiSecret] = useState<string>('');

  const handleKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSecretChange = (e) => {
    setApiSecret(e.target.value);
  };

  const handleGetTokenClick = (e) => {
    console.log({ apiKey });
    console.log({ apiSecret });
  };

  return (
    <div className="container max-w-full mx-auto py-24 px-6">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="text-center font-semibold text-black">
                  Twitter APIのAPIキーとSecretを入力
                </div>

                <form className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        API Key
                      </span>
                      <input
                        placeholder=""
                        type="text"
                        className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        onChange={handleKeyChange}
                      />
                    </div>
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">Secret</span>
                      <div className="relative">
                        <input
                          className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-whit focus:border-gray-600 focus:outline-none"
                          onChange={handleSecretChange}
                        />
                      </div>
                    </div>
                    <Link href="/auth">
                      <div
                        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                        onClick={handleGetTokenClick}
                      >
                        Get Token
                      </div>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
