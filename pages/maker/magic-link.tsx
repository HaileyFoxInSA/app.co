import React from 'react';
import { connect } from 'react-redux';
import { Flex, Box, Text, Button } from '@blockstack/ui';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import UserStore from '@stores/user';
import { fetchApps } from '@stores/maker/actions';
import { selectApiServer, selectUser } from '@stores/apps/selectors';
import { Page } from '@components/page';
import Head from '@containers/head';
import { AppIcon } from '@components/app-icon';
import { App } from '@models/app';

const MagicLinkClaimed = ({ app, user }) => (
  <>
    <Text as="h1" display="block" fontSize={4}>
      {app.name} is now owned by{' '}
      {app.adminBlockstackID || user.user.blockstackUsername}
    </Text>
    <Text display="block" mt={5}>
      Your Magic Link is now no longer functional. Instead, you will use your
      Blockstack ID to manage your app.
    </Text>
    <Link href="/maker/apps" passHref>
      <Button mt={5}>Continue to Developer Portal</Button>
    </Link>
  </>
);

const MagicLinkUnclaimed = ({
  app,
  user,
  loading,
  isSignedIn,
  handleSignIn,
  handleClaim
}) => (
  <>
    <Text display="block" fontSize={4}>
      {isSignedIn
        ? 'Claim the app with your Blockstack ID'
        : `Sign in with Blockstack to claim ${app.name}`}
    </Text>
    <Text display="block" mt={5}>
      You will use this Blockstack ID to manage your app, and remove or modify
      your listing in the future.
    </Text>
    {isSignedIn ? (
      <Button mt={5} onClick={handleClaim}>
        Claim app
      </Button>
    ) : (
      <Button mt={5} onClick={handleSignIn}>
        {loading ? 'Loading...' : 'Sign in with Blockstack'}
      </Button>
    )}
  </>
);

interface MakerMagicLinkProps {
  app: App;
  user: any;
  accessToken: string;
  apiServer: string;
  signIn(path: string): void;
  fetchApps({ user: any, apiServer: string }): void;
}

class MakerMagicLink extends React.Component<MakerMagicLinkProps> {
  static async getInitialProps({ query, reduxStore }) {
    const { accessToken } = query;
    const apiServer = selectApiServer(reduxStore.getState());
    const appResult = await fetch(`${apiServer}/api/magic-link/${accessToken}`);
    console.log(appResult);
    const { app } = await appResult.json();

    return {
      app,
      apiServer,
      accessToken
    };
  }

  state = {
    loading: false,
    claimed: false
  };

  claim = async user => {
    this.setState({
      loading: true
    });
    const { apiServer } = this.props;
    const uri = `${apiServer}/api/magic-link/${this.props.accessToken}`;
    await fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    });
    this.setState({
      loading: false,
      claimed: true
    });
    this.props.fetchApps({ user, apiServer: this.props.apiServer });
  };

  async signIn() {
    const path = document.location.pathname.slice(1);
    this.setState({ loading: true });
    this.props.signIn(path);
  }

  render() {
    const { app, user } = this.props;
    const { loading, claimed } = this.state;

    const isClaimed = app.adminBlockstackID || claimed;

    return (
      <Page fullHeight background="white">
        <Head title={`${app.name} - Maker Portal`} />
        <Page.Section flexDirection="column" px>
          <Flex>
            <Box maxWidth="550px" mx="auto" py={48} mb={7} textAlign="center">
              <AppIcon
                src={app.imgixImageUrl}
                size={48}
                alt={app.name}
                mx="auto"
                mb={5}
              />
              {isClaimed ? (
                <MagicLinkClaimed app={app} user={user} />
              ) : (
                <MagicLinkUnclaimed
                  app={app}
                  user={user}
                  isSignedIn={user && user.jwt}
                  loading={loading}
                  handleClaim={() => this.claim(user)}
                  handleSignIn={() => this.signIn()}
                />
              )}
            </Box>
          </Flex>
        </Page.Section>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: selectUser(state),
  apiServer: selectApiServer(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserStore.actions, fetchApps }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakerMagicLink);
