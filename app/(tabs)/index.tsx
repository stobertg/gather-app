import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Link } from 'expo-router';
import { Button, H2, Paragraph, styled, XStack, YStack } from 'tamagui';

const TitleRow = styled(XStack, {
  alignItems: 'center',
  gap: 100,
});

const Step = styled(YStack, {
  gap: 100,
  marginBottom: 100,
});

const StepTitle = styled(H2, {
  size: '$6',
});

// Example variant: different visual treatments for steps
const StepCard = styled(Step, {
  padding: 100,
  borderRadius: 100,
  backgroundColor: '$background',

  variants: {
    tone: {
      default: {
        backgroundColor: '$background',
      },
      highlight: {
        backgroundColor: '$blue3',
      },
      subtle: {
        backgroundColor: '$gray3',
      },
    },
  } as const,

  defaultVariants: {
    tone: 'default',
  },
});

// Example button with size + intent variants (Stitches-style)
const ActionButton = styled(Button, {
  borderRadius: 100,

  variants: {
    size: {
      sm: { height: 32, paddingHorizontal: '$2' },
      md: { height: 40, paddingHorizontal: '$3' },
      lg: { height: 48, paddingHorizontal: '$4' },
    },
    intent: {
      primary: {
        backgroundColor: '$blue9',
        color: 'white',
      },
      ghost: {
        backgroundColor: 'transparent',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
    intent: 'primary',
  },
});

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <TitleRow>
        <H2>Welcome!</H2>
        <HelloWave />
      </TitleRow>
      <StepCard tone="highlight">
        <StepTitle>Step 1: Try it</StepTitle>
        <Paragraph>
          Edit app/(tabs)/index.tsx to see changes. Press{' '}
          {Platform.select({
            ios: 'cmd + d',
            android: 'cmd + m',
            web: 'F12',
          })}{' '}
          to open developer tools.
        </Paragraph>
        <ActionButton size="sm">Small</ActionButton>
        <ActionButton>Default</ActionButton>
        <ActionButton size="lg" intent="ghost">Ghost</ActionButton>
      </StepCard>
      <StepCard tone="default">
        <Link href="/modal">
          <Link.Trigger>
            <StepTitle>Step 2: Explore</StepTitle>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <Paragraph>{`Tap the Explore tab to learn more about what's included in this starter app.`}</Paragraph>
      </StepCard>
      <StepCard tone="subtle">
        <StepTitle>Step 3: Get a fresh start</StepTitle>
        <Paragraph>
          When you're ready, run npm run reset-project to get a fresh app directory. This will move the current app to app-example. testing. hey hey

        </Paragraph>
      </StepCard>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
