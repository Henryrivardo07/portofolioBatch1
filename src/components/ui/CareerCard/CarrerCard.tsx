import React from 'react';
// Implikasi SCSS global
import './CareerCard.module.scss'; // Tidak menggunakan CSS Modules

interface CarrerCardProps {
  position: string;
  company: string;
  description: Array<string>;
  rangeDate: string;
  id: number;
}

const CarrerCard: React.FC<CarrerCardProps> = ({
  rangeDate,
  position,
  company,
  description,
}: CarrerCardProps) => {
  return (
    <div className='carrerCard'>
      {' '}
      {/* Gunakan kelas global tanpa CSS Modules */}
      <h1 className='carrerCard__position'>{position}</h1>
      <div>
        <div>
          <p className='carrerCard__company'>{company}</p>
        </div>
        <div>
          <p className='carrerCard__rangeDate'>{rangeDate}</p>
        </div>
      </div>
      <p className='carrerCard__description'>{description}</p>
    </div>
  );
};

export default CarrerCard;
