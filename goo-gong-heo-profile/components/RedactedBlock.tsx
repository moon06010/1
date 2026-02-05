import React from 'react';

interface RedactedBlockProps {
  label: string;
}

const RedactedBlock: React.FC<RedactedBlockProps> = ({ label }) => {
  return (
    <div className="relative group my-4 p-4 border border-red-900/30 bg-black/80 rounded select-none overflow-hidden">
      {/* Glitchy "CONFIDENTIAL" Label */}
      <div className="absolute top-0 right-0 bg-red-900/50 text-[10px] px-2 py-0.5 text-red-200 tracking-widest font-mono">
        TOP SECRET
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-xs text-zinc-600 font-serif mb-1 uppercase tracking-widest">
           {label}
        </span>
        
        {/* Visual representation of redacted text */}
        <div className="space-y-2 animate-pulse">
           <div className="w-full h-4 bg-zinc-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjcyNzI3Ii8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
           </div>
           <div className="w-3/4 h-4 bg-zinc-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjcyNzI3Ii8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
           </div>
           <div className="w-5/6 h-4 bg-zinc-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjcyNzI3Ii8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
           </div>
        </div>
      </div>

      {/* Overlay to ensure unreadability */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="transform -rotate-12 border-2 border-red-900/40 px-4 py-1 text-red-800/40 font-black text-2xl tracking-widest uppercase pointer-events-none">
            Access Denied
         </div>
      </div>
    </div>
  );
};

export default RedactedBlock;
