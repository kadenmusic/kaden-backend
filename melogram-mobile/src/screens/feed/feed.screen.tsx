import {
  View,
  Text,
  HStack,
  FlatList,
  Box,
  Avatar,
  VStack,
  Image,
  Heading,
} from "native-base";
import { darkModePostBackgroundColor } from "../../styles/theme";
import { RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import { dummyPostData } from "../../config/dummy";
import IconButtonComponent from "../../components/shared/icon-button/icon-button.component";
import { IconLibraryType } from "../../config/enums";
import * as Helpers from "../../helpers/helpers";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import PostedFeedComponent from "../../components/feed/posted-feed.component";
import NotPostedFeedComponent from "../../components/feed/not-posted-feed.component";

export default function FeedScreen({ navigation }: { navigation: any }) {
  const userPosted = false;

  return (
    <SafeAreaWrapperComponent>
      <HeaderComponent navigation={navigation} title={"Your Feed"} />
      <View paddingLeft={5} paddingRight={5}>
        {userPosted ? <PostedFeedComponent /> : <NotPostedFeedComponent />}
      </View>
    </SafeAreaWrapperComponent>
  );
}
