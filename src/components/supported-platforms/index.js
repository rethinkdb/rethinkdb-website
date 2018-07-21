import React from 'react'
import Link from 'gatsby-link'

import AsyncImage from '../async-image'
import styles from './supported-platforms.module.css'

const DriversPlatforms = (
  <section className={styles.supportedPlatforms}>
    <section className={styles.platformCategory}>
      <h2>Official packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <Link to="/docs/install/drivers/javascript/">
            <AsyncImage src="/docs/javascript.png" />
            <p>Javascript</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/drivers/ruby/">
            <AsyncImage src="/docs/ruby.png" />
            <p>Ruby</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/drivers/python/">
            <AsyncImage src="/docs/python.png" />
            <p>Python</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/drivers/java/">
            <AsyncImage src="/docs/java.png" />
            <p>Java</p>
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.platformCategory}>
      <h2>Community supported packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <a
            href="https://github.com/bchavez/RethinkDb.Driver"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/csharp.png" />
            <p>
              C# <span className={styles.driverAuthor}>bchavez</span>
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mfenniak/rethinkdb-net"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/csharp.png" />
            <p>
              C# <span className={styles.driverAuthor}>mfenniak</span>
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AtnNn/librethinkdbxx"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/cpp.png" />
            <p>C++</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/apa512/clj-rethinkdb"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/clojure.png" />
            <p>Clojure</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/orthecreedence/cl-rethinkdb"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/commonlisp.png" />
            <p style={{ fontSize: '17px' }}>Common Lisp</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/billysometimes/rethinkdb"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/dart.png" />
            <p>Dart</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/brandonhamilton/rethinkdb-delphi"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/delphi.png" />
            <p>Delphi</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hamiltop/rethinkdb-elixir"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/elixir.png" />
            <p>Elixir</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kureikain/relang"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/erlang.png" />
            <p>Erlang</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dancannon/gorethink"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/go.png" />
            <p>Go</p>
          </a>
        </li>
        <li>
          <a
            href="http://hackage.haskell.org/package/rethinkdb"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/haskell.png" />
            <p>Haskell</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/neumino/rethinkdbdash"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/javascript.png" />
            <p>
              JS <span className={styles.driverAuthor}>neumino</span>
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/grandquista/Lua-ReQL"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/lua.png" />
            <p>Lua</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rgv151/rethinkdb.nim"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/nim.png" />
            <p>Nim</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/njlg/perl-rethinkdb"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/perl.png" />
            <p>Perl</p>
          </a>
        </li>
        <li>
          <a
            href="http://danielmewes.github.io/php-rql/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/php.png" />
            <p>PHP</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mbq/rethinker"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/r.png" />
            <p>R</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rust-rethinkdb/reql"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/rust.png" />
            <p>Rust</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pixelspark/rethink-swift"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <AsyncImage src="/docs/swift.png" />
            <p>Swift</p>
          </a>
        </li>
      </ul>
    </section>
  </section>
)

const OSPlatforms = (
  <section className={styles.supportedPlatforms}>
    <section className={styles.platformCategory}>
      <h2>Official packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <Link to="/docs/install/ubuntu/">
            <AsyncImage src="/docs/ubuntu.png" />
            <p>Ubuntu</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/macos/">
            <AsyncImage src="/docs/macos.png" />
            <p>OS X</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/centos/">
            <AsyncImage src="/docs/centos.png" />
            <p>CentOS</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/debian/">
            <AsyncImage src="/docs/debian.png" />
            <p>Debian</p>
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.platformCategory}>
      <h2>Community supported packages</h2>
      <ul className={styles.platformButtons}>
        <li>
          <Link to="/docs/install/arch/">
            <AsyncImage src="/docs/arch.png" />
            <p>Arch Linux</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/opensuse/">
            <AsyncImage src="/docs/opensuse.png" />
            <p>openSUSE</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/fedora/">
            <AsyncImage src="/docs/fedora.png" />
            <p>Fedora</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/mint/">
            <AsyncImage src="/docs/mint.png" />
            <p>Linux Mint</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/raspbian/">
            <AsyncImage src="/docs/raspbian.png" />
            <p>Raspbian</p>
          </Link>
        </li>
        <li>
          <Link to="/docs/install/gentoo/">
            <AsyncImage src="/docs/gentoo.png" />
            <p>Gentoo</p>
          </Link>
        </li>
      </ul>
    </section>
  </section>
)

const SupportedPlatforms = props =>
  props.isdrivers ? DriversPlatforms : OSPlatforms

export default SupportedPlatforms
