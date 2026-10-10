---
name: refreshdistros
description: "Use when you need to clear the TOP_50_DISTROS table and add Anduin OS, Bazzite GNOME, Bazzite KDE, CachyOS, Endeavour OS, Ubuntu, Linux Mint Cinnamon, Linux Mint XFCE, Linux Mint MATE, Manjaro Cinnamon, Manjaro GNOME, Manjaro i3, Manjaro KDE Plasma, Manjaro Xfce, Omarchy, openSUSE Leap, openSUSE Tumbleweed, PikaOS COSMIC, PikaOS GNOME, PikaOS Hyprland, PikaOS KDE Plasma, PikaOS Niri, Pop!_OS, Zorin OS, MX Linux XFCE, MX Linux KDE, MX Linux Fluxbox, Fedora Workstation, Fedora KDE, and all currently listed Fedora Spins rows with the exact values requested."
---

When asked to refresh, clear the table named `TOP_50_DISTROS` in `top_linux_distros.html`.

After refreshing the table, update the prominent `Last refreshed` timestamp in the page header to the current local date and time, including the timezone. Update both its visible text and its machine-readable ISO 8601 `datetime` value. Stamp the refresh time; do not generate it dynamically when visitors open the page.

Then add these Bazzite rows:
- `Bazzite GNOME`: base `Fedora`, official site `https://bazzite.gg/`, download `https://download.bazzite.gg/bazzite-gnome-stable-live-amd64.iso`, checksum `https://download.bazzite.gg/bazzite-gnome-stable-live-amd64.iso-CHECKSUM`
- `Bazzite KDE`: base `Fedora`, official site `https://bazzite.gg/`, download `https://download.bazzite.gg/bazzite-stable-live-amd64.iso`, checksum `https://download.bazzite.gg/bazzite-stable-live-amd64.iso-CHECKSUM`
- use the Bazzite logo `https://raw.githubusercontent.com/ublue-os/bazzite/main/press_kit/Bazzite_Color.svg` for both names
- display direct ISO and checksum links with clean `Download` and `Checksum` labels

Then add this CachyOS row:
- base: `Arch`
- official site: `https://cachyos.org/`
- download: use the current `Direct` link target in the Desktop Edition download menu on `https://cachyos.org/download`
- checksum: use the matching `Checksum` link target in that same menu, which is the Direct URL with `.sha256` appended

Do not use the download page URL itself as the CachyOS download or checksum value.

Then add this Anduin OS row:
- name: `Anduin OS`
- base: `Ubuntu`
- official site: `https://www.anduinos.com/`
- download: `https://www.anduinos.com/thankyou.html?download=amd64`
- checksum: `https://cf.anduinos.com/AnduinOS-2.0.4-amd64.sha256`
- display the Anduin OS logo next to its name using `https://www.anduinos.com/download/project-logo/anduinos_%E6%AF%9B%E7%8E%BB%E7%92%83%E7%AB%8B%E4%BD%93logo-96px.svg`

Then add this Endeavour OS row:
- name: `Endeavour OS`
- base: `Arch`
- official site: `https://endeavouros.com/`
- download: `https://endeavouros.com/download/`
- checksum: `https://endeavouros.com/download/`
- display the EndeavourOS logo next to the name using `https://cdn.simpleicons.org/endeavouros`

Then add this Linux Mint Cinnamon row:
- base: `Ubuntu`
- official site: `https://linuxmint.com/`
- download: use the latest URL behind the Cinnamon download link on `https://linuxmint.com/download.php`
- checksum: use the `sha256sum.txt` link shown on the page for that Cinnamon download

The Linux Mint Cinnamon row should use the latest Cinnamon download URL and checksum from that Linux Mint download page, not a stale or generic link.

Then add this Linux Mint XFCE row:
- base: `Ubuntu`
- official site: `https://linuxmint.com/`
- download: use the latest URL behind the XFCE download link on `https://linuxmint.com/download.php`
- checksum: use the `sha256sum.txt` link shown on the page for that XFCE download

The Linux Mint XFCE row should use the latest XFCE download URL and checksum from that Linux Mint download page, not a stale or generic link.

Then add this Linux Mint MATE row:
- base: `Ubuntu`
- official site: `https://linuxmint.com/`
- download: use the latest URL behind the MATE download link on `https://linuxmint.com/download.php`
- checksum: use the `sha256sum.txt` link shown on the page for that MATE download

The Linux Mint MATE row should use the latest MATE download URL and checksum from that Linux Mint download page, not a stale or generic link.

Then add a row for each x86 desktop edition on `https://manjaro.org/products/download/x86` that has both a `Download` link and a `More` details control:
- `Manjaro KDE Plasma`: base `Arch`; download `https://download.manjaro.org/kde/26.1.0/manjaro-kde-26.1.0-260812-linux71.iso`; checksum `https://download.manjaro.org/kde/26.1.0/manjaro-kde-26.1.0-260812-linux71.iso.sha256`
- `Manjaro Xfce`: base `Arch`; download `https://download.manjaro.org/xfce/26.1.0/manjaro-xfce-26.1.0-260812-linux71.iso`; checksum `https://download.manjaro.org/xfce/26.1.0/manjaro-xfce-26.1.0-260812-linux71.iso.sha256`
- `Manjaro GNOME`: base `Arch`; download `https://download.manjaro.org/gnome/26.1.0/manjaro-gnome-26.1.0-260812-linux71.iso`; checksum `https://download.manjaro.org/gnome/26.1.0/manjaro-gnome-26.1.0-260812-linux71.iso.sha256`
- `Manjaro Cinnamon`: base `Arch`; download `https://download.manjaro.org/cinnamon/25.0.3/manjaro-cinnamon-25.0.3-250609-linux612.iso`; checksum `https://download.manjaro.org/cinnamon/25.0.3/manjaro-cinnamon-25.0.3-250609-linux612.iso.sha512`
- `Manjaro i3 Window Manager`: base `Arch`; download `https://download.manjaro.org/i3/25.0.3/manjaro-i3-25.0.3-250609-linux612.iso`; checksum `https://download.manjaro.org/i3/25.0.3/manjaro-i3-25.0.3-250609-linux612.iso.sha512`
- official site for all rows: `https://manjaro.org/`
- use the Manjaro Linux logo `https://cdn.simpleicons.org/manjaro` for each edition
- display download and checksum links as clean `Download` and `Checksum` labels

For each refresh, discover the current desktop editions and follow each edition's `Download` and `More` controls on the official x86 page to use the current ISO and matching checksum links. Include editions only when both links are provided there.

Then add this Omarchy row:
- name: `Omarchy`
- base: `Arch`
- official site: `https://omarchy.org/`
- download: `https://iso.omarchy.org/omarchy-4.0.4.iso`
- checksum: `https://iso.omarchy.org/omarchy-4.0.4.iso.sha256`
- display the official Omarchy logo next to its name using `https://omarchy.org/brand/omarchy-logo.svg`

On future refreshes, use the current download and matching checksum URLs from the official Omarchy site.

Then add this openSUSE Leap row:
- name: `openSUSE Leap`
- base: `openSUSE`
- official site: `https://get.opensuse.org/leap`
- download: `https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-online-installer-x86_64.install.iso`
- checksum: `https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-online-installer-x86_64.install.iso.sha512`
- display the openSUSE logo next to the distro and base names using `https://cdn.simpleicons.org/opensuse`

Then add this openSUSE Tumbleweed row:
- name: `openSUSE Tumbleweed`
- base: `openSUSE`
- official site: `https://get.opensuse.org/tumbleweed/`
- download: `https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-NET-x86_64-Current.iso`
- checksum: `https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-NET-x86_64-Current.iso.sha256`
- display the openSUSE logo next to the distro and base names using `https://cdn.simpleicons.org/opensuse`

Then add one row for each standard desktop edition listed in the editions section of `https://pika-os.com/#editions`:
- standard editions: GNOME, KDE Plasma, Hyprland, Niri, and COSMIC; do not include NVIDIA-specific variants
- name each row `PikaOS` followed by its desktop name
- base: `Debian`
- official site: `https://pika-os.com/`
- download: use that edition's `Standard ISO` link
- checksum: use that edition's matching `MD5 checksum for Standard ISO` link
- use the PikaOS logo `https://git.pika-os.com/website/pika-branding/raw/branch/main/logos/pika-logo-text.svg` for each edition

For each refresh, discover the current standard editions and use their matching ISO and MD5 URLs from the official page; exclude NVIDIA-specific ISO variants.

Then add this Pop!_OS row:
- base: `Ubuntu`
- official site: `https://system76.com/download-pop/`
- download: use the Download link next to the main `Pop!_OS 24.04 LTS` release on `https://system76.com/download-pop/`; use the AMD64/generic image, not the NVIDIA or ARM image
- checksum: use the SHA256 Sum displayed for that same main LTS release
- store the displayed 64-character SHA256 digest directly in the existing `checksum` field and render it as text, not as a link
- show a `View` control in the checksum column instead of displaying the digest by default; clicking `View` opens a popup/dialog containing the SHA256 digest
- display the Pop!_OS logo next to the distro name using `https://cdn.simpleicons.org/popos`

On future refreshes, use the current main LTS release and its matching download and SHA256 value from the official page.

Then add this Zorin OS row:
- name: `Zorin OS`
- base: `Ubuntu`
- official site: `https://zorin.com/os/`
- download: on `https://zorin.com/os/download/`, use the latest Core release's Download control, follow `Skip to download` if prompted, and use the World mirror's direct ISO URL
- checksum: use the SHA256 digest for that same latest Core release from `https://help.zorin.com/docs/getting-started/check-the-integrity-of-your-copy-of-zorin-os/`
- store the displayed 64-character SHA256 digest directly in the existing `checksum` field and render it as text, not as a link
- show a `View` control in the checksum column instead of displaying the digest by default; clicking `View` opens a popup/dialog titled for Zorin OS and containing its SHA256 digest
- display the official Zorin OS logo next to the distro name using `https://assets.zorincdn.com/zorin.com/images/home/zorin-os.svg`

On future refreshes, use the latest Core release and its matching ISO and SHA256 value from the official pages.

Then add this Ubuntu row:
- name: `Ubuntu`
- base: `Ubuntu`
- official site: `https://ubuntu.com/desktop`
- download: on `https://ubuntu.com/download/desktop`, use the latest LTS release's amd64 desktop ISO link
- checksum: use the SHA256 digest for that exact ISO from its official verification/release checksum page
- store the 64-character SHA256 digest directly in the existing `checksum` field and render it as text, not as a link
- show a `View` control in the checksum column instead of displaying the digest by default; clicking `View` opens a popup/dialog titled for Ubuntu and containing its SHA256 digest
- display the official Ubuntu logo next to the distro name using `https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png`

On future refreshes, use the latest LTS release and its matching amd64 desktop ISO and SHA256 value from the official pages.

Then add this MX Linux XFCE row:
- base: `Debian`
- official site: `https://mxlinux.org/`
- download: include both the latest XFCE X64 and XFCE AHS X64 download URLs from `https://mxlinux.org/download-links/`
- checksum: include the matching XFCE X64 and XFCE AHS X64 checksum links from `https://mxlinux.org/wiki/system/iso-download-mirrors/#checksumsignatures`

Then add this MX Linux KDE row:
- base: `Debian`
- official site: `https://mxlinux.org/`
- download: use the latest KDE X64 download URL from `https://mxlinux.org/download-links/`
- checksum: use the matching KDE X64 checksum link from `https://mxlinux.org/wiki/system/iso-download-mirrors/#checksumsignatures`

MX Linux KDE has one download/checksum pair; do not add an AHS KDE link.

Then add this MX Linux Fluxbox row:
- base: `Debian`
- official site: `https://mxlinux.org/`
- download: use the latest Fluxbox X64 download URL from `https://mxlinux.org/download-links/`
- checksum: use the matching Fluxbox X64 checksum link from `https://mxlinux.org/wiki/system/iso-download-mirrors/#checksumsignatures`

MX Linux Fluxbox has one download/checksum pair.

Then add this Fedora Workstation row:
- base: `Fedora`
- official site: `https://fedoraproject.org/`
- download: use the x86_64 ISO download link on `https://fedoraproject.org/workstation/download/`
- checksum: use the checksum download link on `https://fedoraproject.org/workstation/download/`
- use the official Fedora logo for both the Fedora Workstation distro and Fedora base

Then add this Fedora KDE row:
- base: `Fedora`
- official site: `https://fedoraproject.org/`
- download: use the x86_64 ISO download link on `https://fedoraproject.org/kde/download/`
- checksum: use the checksum download link on `https://fedoraproject.org/kde/download/`
- use the official Fedora logo for the Fedora KDE distro and Fedora base

Then add one row for every Spin listed on `https://fedoraproject.org/spins/`:
- Follow each listed Spin's `Download Now` link to its download page; do not include Fedora Workstation, Fedora KDE, Labs, or Atomic desktops as Spins.
- Use the Spin's name as displayed on its download page, without the release number (for example, `Fedora Xfce` or `Fedora Cinnamon Spin`).
- base: `Fedora`
- Use the exact base value `Fedora` for every Spin.
- official site: `https://fedoraproject.org`
- download: use the x86_64 Live ISO link on that Spin's download page, not the ARM image or raw disk image
- checksum: use the official checksum file link on that same download page corresponding to the x86_64 ISO
- use the official Fedora logo for each Spin and its `Fedora` base, pointing to the official Fedora logo in the base-logo map
- display the download and checksum as clean labels, with the Spin name and `Checksum` as link text

Discover the current Spins and follow their current download pages during each refresh; do not rely on a fixed list of Spin names or stale ISO/checksum URLs.

For a distro with multiple variants, store its download URLs and matching official checksum URLs as arrays in the existing `download` and `checksum` fields, in the same order. Label each link with its variant. Do not add fields.

For every distro whose official source publishes a checksum file, set the existing `checksum` value to the direct URL of that official checksum file. Ubuntu, Pop!_OS, and Zorin OS are exceptions: store the official SHA256 digests for their selected ISO images as text. Do not download, copy, or create local checksum files. Do not add any checksum-related data fields.

Display the links as clean labels such as `CachyOS`, `Download`, and `Checksum` instead of raw URLs. Keep official-site, distro-download, and checksum hrefs as their resolved URLs.

Display each distro's logo next to its name and its base distribution's logo next to the base name. If a distro name contains `Linux Mint` anywhere in the name, ignoring capitalization, use the Linux Mint logo for it. If a distro name contains `MX Linux` anywhere in the name, ignoring capitalization, use the MX Linux Logo for it. Use an available logo; omit it when no logo is available. Logos are presentation only and must not add fields to the distro data.

Order the rows in alphabetical order of distro name.

Do not add any other fields or values such as rank, desktop, or distrowatchUrl.

