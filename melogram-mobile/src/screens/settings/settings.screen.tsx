import { View, FlatList } from "native-base";
import { colors } from "../../styles/theme";
import * as Helpers from "../../helpers/helpers";
import SettingsButtonComponent from "../../components/settings/settings-button.component";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const scrollViewHeight = Helpers.getScrollViewHeight();

  const buttons = [
    <SettingsButtonComponent
      buttonText="Linked Accounts"
      iconName="musical-notes-outline"
    />,
    <SettingsButtonComponent
      buttonText="Notifications"
      iconName="notifications-outline"
    />,
    <SettingsButtonComponent
      buttonText="Account Information"
      iconName="list-outline"
    />,
    <SettingsButtonComponent
      buttonText="Edit Profile"
      iconName="person-circle-outline"
    />,
    <SettingsButtonComponent
      buttonText="Log Out"
      iconName="log-out-outline"
      iconColor={colors.red[400]}
      textColor={colors.red[400]}
      showArrow={false}
      textFontWeight={600}
    />,
  ];

  return (
    <SafeAreaWrapperComponent>
      <HeaderComponent
        title={"Settings"}
        showActionButtons={false}
        navigation={navigation}
      />
      <FlatList
        paddingLeft={5}
        paddingRight={5}
        showsVerticalScrollIndicator={false}
        height={scrollViewHeight}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        data={buttons}
        renderItem={({ item }) => item}
      />
    </SafeAreaWrapperComponent>
  );
}
