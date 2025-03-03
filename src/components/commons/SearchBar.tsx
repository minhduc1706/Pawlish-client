// @/components/SearchBar.tsx
import { Search } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openSearch, closeSearch, setQuery } from "@/redux/search/searchSlice";

const DEFAULT_SUGGESTIONS = [
  "React Hooks",
  "TypeScript Tips",
  "ShadCN Components",
  "Redux Toolkit",
  "Next.js Guide",
];

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { open, query = "" } = useAppSelector((state) => state.search);

  const filteredSuggestions = DEFAULT_SUGGESTIONS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (value: string) => {
    dispatch(setQuery(value));
  };

  const handleOpenChange = (isOpen: boolean) => {
    dispatch(isOpen ? openSearch() : closeSearch());
  };


  return (
    <div className="relative w-full max-w-xs">
      <Command
        className={`border rounded-xl overflow-visible bg-white transition-all duration-300 ease-in-out ${
          open ? "w-full shadow-lg border-blue-500" : "w-64 border-gray-300"
        }`}
      >
        <div className="relative flex items-center">
          <CommandInput
            placeholder="Search..."
            value={query}
            onValueChange={handleQueryChange}
            onFocus={() => handleOpenChange(true)}
            onBlur={() => setTimeout(() => handleOpenChange(false), 100)}
            className="w-full pr-10 py-2 border-none focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <Search
            size={20}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => handleOpenChange(true)}
          />
        </div>

        {open && (
          <CommandList className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-auto rounded-xl border bg-white shadow-lg z-10 animate-in fade-in-0 zoom-in-95 duration-200">
            <CommandEmpty className="py-2 text-center text-sm text-gray-500">
              No result.
            </CommandEmpty>
            <CommandGroup heading="Recommendation" className="text-xs text-gray-600">
              {filteredSuggestions.map((suggestion) => (
                <CommandItem
                  key={suggestion}
                  onSelect={() => {
                    dispatch(setQuery(suggestion));
                    handleOpenChange(false);
                  }}
                  className="cursor-pointer py-2 px-3 hover:bg-gray-100 transition-colors"
                >
                  {suggestion}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default SearchBar;