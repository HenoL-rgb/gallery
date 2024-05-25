import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {Refetch} from '@shared/assets/icons';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {createStyles} from './styles';

interface ErrorPageProps {
  error?: string;
  refetch?: () => void;
  loading?: boolean;
}

type Navigation = NavigationProp<MainRouterParams>;

export default function ErrorPage({error, refetch, loading}: ErrorPageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation<Navigation>();

  function handleRefetch() {
    if (refetch) {
      refetch();
      return;
    }

    navigation.navigate(MainRoutes.HOME);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{error || 'Something went wrong :('}</Text>
      <Pressable
        onPress={handleRefetch}
        style={({pressed}) => [styles.refetch, {opacity: pressed ? 0.6 : 1}]}>
        {loading ? (
          <ActivityIndicator color={theme.colors.text} size={16} />
        ) : refetch ? (
          <Refetch stroke="#ffffff" width={16} height={16} />
        ) : (
          <Text style={styles.refetchText}>Return to Home</Text>
        )}
      </Pressable>
    </View>
  );
}
