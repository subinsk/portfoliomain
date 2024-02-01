export const SectionHeader = ({ text }: { text: string }) => (
  <p className='flex bg-gradient-to-r from-custom-purple-300 to-custom-cyan bg-clip-text text-transparent p-6 text-3xl md:text-5xl py-10 md:p-12 font-medium after:content-[""] after:relative after:inline-block md:after:w-2/5 after:w-0 after:h-[1px] after:bg-custom-purple-50 after:mt-12 md:after:mt-7 after:ml-4'>
    {text}
  </p>
);
