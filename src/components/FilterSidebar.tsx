
import React, { useState } from 'react';
import { FilterOptions } from '@/types/product';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  minPrice: number;
  maxPrice: number;
}

export default function FilterSidebar({ filters, onFilterChange, minPrice, maxPrice }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);
  
  const handleBrandChange = (brand: string) => {
    const updatedBrands = localFilters.brands.includes(brand)
      ? localFilters.brands.filter(b => b !== brand)
      : [...localFilters.brands, brand];
    
    const newFilters = {
      ...localFilters,
      brands: updatedBrands
    };
    
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleRamChange = (ram: string) => {
    const updatedRam = localFilters.ram.includes(ram)
      ? localFilters.ram.filter(r => r !== ram)
      : [...localFilters.ram, ram];
    
    const newFilters = {
      ...localFilters,
      ram: updatedRam
    };
    
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleStorageChange = (storage: string) => {
    const updatedStorage = localFilters.storage.includes(storage)
      ? localFilters.storage.filter(s => s !== storage)
      : [...localFilters.storage, storage];
    
    const newFilters = {
      ...localFilters,
      storage: updatedStorage
    };
    
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handlePriceChange = (value: number[]) => {
    const newFilters = {
      ...localFilters,
      priceRange: [value[0], value[1]] as [number, number]
    };
    
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-lg font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'].map(brand => (
            <div key={brand} className="flex items-center">
              <Checkbox 
                id={`brand-${brand}`} 
                checked={localFilters.brands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="ml-2">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-heading text-lg font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[localFilters.priceRange[0], localFilters.priceRange[1]]}
            max={maxPrice}
            min={minPrice}
            step={50}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>${localFilters.priceRange[0]}</span>
            <span>${localFilters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-heading text-lg font-semibold mb-3">RAM</h3>
        <div className="space-y-2">
          {['6GB', '8GB', '12GB', '16GB'].map(ram => (
            <div key={ram} className="flex items-center">
              <Checkbox 
                id={`ram-${ram}`} 
                checked={localFilters.ram.includes(ram)}
                onCheckedChange={() => handleRamChange(ram)}
              />
              <Label htmlFor={`ram-${ram}`} className="ml-2">
                {ram}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-heading text-lg font-semibold mb-3">Storage</h3>
        <div className="space-y-2">
          {['128GB', '256GB', '512GB', '1TB'].map(storage => (
            <div key={storage} className="flex items-center">
              <Checkbox 
                id={`storage-${storage}`} 
                checked={localFilters.storage.includes(storage)}
                onCheckedChange={() => handleStorageChange(storage)}
              />
              <Label htmlFor={`storage-${storage}`} className="ml-2">
                {storage}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
