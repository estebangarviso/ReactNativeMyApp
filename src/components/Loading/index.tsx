import ContentLoader from 'react-content-loader/native';
import React, {FC} from 'react';

const Loading: FC<{type: string}> = ({type}) => {
  const CharacterItem = () => (
    <ContentLoader
      height={100}
      width={100}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100" height="100" />
      
};
