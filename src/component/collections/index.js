import React from "react";

import { Container } from "../common/container";
import {CollectionsWrapper,CollectionLong,CollectionShort} from "./collection"




export const Collections = () => {
  return (
    <Container display="flex" direction="column" height="91vh">
        <CollectionsWrapper>
          <CollectionLong backgroundColor="#EBD9D5" mright="1rem"></CollectionLong>
          <CollectionShort backgroundColor="#F0F0EE"></CollectionShort>
        </CollectionsWrapper>
        <CollectionsWrapper>
          <CollectionShort backgroundColor="#F0F0EE"></CollectionShort>
          <CollectionLong
            backgroundColor="#D2DDE3"
            mleft="1rem"
          ></CollectionLong>
        </CollectionsWrapper>
    </Container>
  );
};
