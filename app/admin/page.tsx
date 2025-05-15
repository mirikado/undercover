'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

export default function Admin() {

  const router = useRouter();
  const pathname = usePathname();

  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(password);
    
    if (password === 'chau') {
      router.push(`${pathname}/keywordManager`);
    }
  }, [password])

  return (
    <div>
      <h2>Login Screen</h2>
      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );
}
