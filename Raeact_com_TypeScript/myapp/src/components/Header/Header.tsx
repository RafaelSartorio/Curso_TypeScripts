import React from 'react';
import { Image, Center } from '@chakra-ui/react';
import minhaImagem from '../Header/LogoBanco.png';

export const ParteCima = () => {
    return (
        <Center>
            <div className="header">
                <Image
                    src={minhaImagem}
                    width='200px'
                />
            </div>
        </Center>
    );
};
