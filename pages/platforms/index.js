import React from 'react'
import { Page } from '@components/page'
import { Newsletter } from '@components/newsletter'
import { AppsList } from '@components/list/apps'
import { CategoriesList } from '@components/list/categories'
import { PlatformsList } from '@components/list/platforms'
import { Modal } from '@components/modal'
import Head from 'next/head'

class PlatformsPage extends React.PureComponent {
  state = {
    filterBy: 'blockchain'
  }

  static async getInitialProps(ctx) {
    const {
      query: { platform }
    } = ctx

    return {
      platform
    }
  }

  render() {
    return (
      <Page>
        <Head>
          <title>App.co - The Universal Dapp Store</title>
        </Head>
        <Page.Section px>
          <Newsletter wrap />
        </Page.Section>
        <Page.Section p={0} px>
          <Page.Section wrap flexDirection={['column', 'column', 'row']} p={0}>
            <PlatformsList mr={[0, 3]} />
            <CategoriesList />
          </Page.Section>
        </Page.Section>
        <Page.Section flexDirection="column" px>
          <AppsList filterBy={this.state.filterBy} single={this.props.platform} />
        </Page.Section>
        <Modal />
      </Page>
    )
  }
}

export default PlatformsPage