import React from 'react'

import AsyncImage from '../async-image'
import styles from './supported-platforms.module.css'

const SupportedPlatforms = () => (
  <section className={styles.supportedPlatforms}>
    <section className={styles.platformCategory}>
      <h2>Official packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <a href="ubuntu/">
            <AsyncImage src="/docs/ubuntu.png" />
            <p className="name">Ubuntu</p>
          </a>
        </li>
        <li>
          <a href="macos/">
            <AsyncImage src="/docs/macos.png" />
            <p className="name">OS X</p>
          </a>
        </li>
        <li>
          <a href="centos/">
            <AsyncImage src="/docs/centos.png" />
            <p className="name">CentOS</p>
          </a>
        </li>
        <li>
          <a href="debian/">
            <AsyncImage src="/docs/debian.png" />
            <p className="name">Debian</p>
          </a>
        </li>
      </ul>
    </section>
    <section className={styles.platformCategory}>
      <h2>Community supported packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <a href="arch/">
            <AsyncImage src="/docs/arch.png" />
            <p className="name">Arch Linux</p>
          </a>
        </li>
        <li>
          <a href="opensuse/">
            <AsyncImage src="/docs/opensuse.png" />
            <p className="name">openSUSE</p>
          </a>
        </li>
        <li>
          <a href="fedora/">
            <AsyncImage src="/docs/fedora.png" />
            <p className="name">Fedora</p>
          </a>
        </li>
        <li>
          <a href="mint/">
            <AsyncImage src="/docs/mint.png" />
            <p className="name">Linux Mint</p>
          </a>
        </li>
        <li>
          <a href="raspbian/">
            <AsyncImage src="/docs/raspbian.png" />
            <p className="name">Raspbian</p>
          </a>
        </li>
        <li>
          <a href="gentoo/">
            <AsyncImage src="/docs/gentoo.png" />
            <p className="name">Gentoo</p>
          </a>
        </li>
      </ul>
    </section>
  </section>
)

export default SupportedPlatforms
