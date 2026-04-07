import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

// const { width } = Dimensions.get('window');

const navItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '📊', label: 'Reports' },
  { icon: '👥', label: 'Customers' },
  { icon: '💎', label: 'Leads' },
  { icon: '📦', label: 'Products' },
];

const barData = [
  { h: 0.4, a: false }, { h: 0.55, a: false }, { h: 0.35, a: false }, { h: 0.7, a: false },
  { h: 0.5, a: true  }, { h: 0.65, a: false }, { h: 0.45, a: false }, { h: 0.8, a: false },
  { h: 0.3, a: false }, { h: 0.6, a: false  }, { h: 0.48, a: false }, { h: 0.55, a: true },
];
const days = ['M','T','W','T','F','S','S','M','T','W','T','F'];

const orderList = [
  { icon: '🥔', bg: '#eef0fe', name: 'Potato',    date: 'Mar 28, 2026', amt: 'Rs 1,300.50', badge: 'Delivered', bc: '#e6faf0', btc: '#2db96f' },
  { icon: '🧅', bg: '#fff8e6', name: 'Onion', date: 'Mar 25, 2026', amt: 'Rs 720.25',   badge: 'Pending',   bc: '#fff8e6', btc: '#e8a020' },
  { icon: '🍎', bg: '#ffeef1', name: 'Apple',      date: 'Mar 22, 2026', amt: 'Rs 420.83',   badge: 'Returned',  bc: '#ffeef1', btc: '#e8445a' },
];

const bnavItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '📊', label: 'Reports' },
  { icon: '👥', label: 'Customers' },
  { icon: '⚙️', label: 'Settings' },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const [activeBnav, setActiveBnav] = useState(1);

  const circumference = 2 * Math.PI * 30;
  const strokeDashoffset = circumference * (1 - 0.9);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f2f8" />

      {/* Overlay */}
      {navOpen && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setNavOpen(false)}
          activeOpacity={1}
        />
      )}

      {/* Side Nav */}
      {navOpen && (
        <View style={styles.sidenav}>
          <TouchableOpacity style={styles.navClose} onPress={() => setNavOpen(false)}>
            <Text style={styles.navCloseText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.navProfile}>
            <View style={styles.navAvatar}>
              <Text style={styles.navAvatarText}>RS</Text>
            </View>
            <Text style={styles.navName}>Ram Shrestha</Text>
            <Text style={styles.navEmail}>ramstha@gmail.com</Text>
          </View>

          <ScrollView style={styles.navLinks} showsVerticalScrollIndicator={false}>
            {navItems.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.navItem, activeNav === i && styles.navItemActive]}
                onPress={() => setActiveNav(i)}
              >
                <View style={[styles.navIcon, activeNav === i && styles.navIconActive]}>
                  <Text style={styles.navIconText}>{item.icon}</Text>
                </View>
                <Text style={[styles.navItemText, activeNav === i && styles.navItemTextActive]}>
                  {item.label}
                </Text>
                <Text style={styles.navChevron}>{activeNav === i ? '‹' : '›'}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.navSettingsWrap}>
            <TouchableOpacity style={styles.navItem}>
              <View style={styles.navIcon}>
                <Text style={styles.navIconText}>⚙️</Text>
              </View>
              <Text style={styles.navItemText}>Settings</Text>
              <Text style={styles.navChevron}>›</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Main Dashboard */}
      <ScrollView style={styles.dashboard} showsVerticalScrollIndicator={false}>

        {/* Top Bar */}
        <View style={styles.topbar}>
          <TouchableOpacity style={styles.menuBtn} onPress={() => setNavOpen(true)}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </TouchableOpacity>
          <Text style={styles.topbarTitle}>Dashboard</Text>
          <View style={styles.topbarAvatar}>
            <Text style={styles.topbarAvatarText}>RS</Text>
          </View>
        </View>

        {/* Greeting */}
        <View style={styles.greeting}>
          <Text style={styles.greetingSub}>Good morning 👋</Text>
          <Text style={styles.greetingName}>Ram Shrestha</Text>
        </View>

        {/* Stat Cards */}
        <View style={styles.cardsRow}>
          <View style={[styles.statCard, styles.statCardAccent]}>
            <Text style={styles.statLabel}>Revenue</Text>
            <Text style={styles.statValue}>Rs 84K</Text>
            <Text style={styles.statChange}>↑ 12.4% this month</Text>
          </View>
          <View style={[styles.statCard, styles.statCardPrimary]}>
            <Text style={styles.statLabel}>Orders</Text>
            <Text style={styles.statValue}>346</Text>
            <Text style={styles.statChange}>↑ 8.1% this week</Text>
          </View>
        </View>

        {/* Sales Performance */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sales Performance</Text>
          <Text style={styles.sectionLink}>Last Month ›</Text>
        </View>
        <View style={styles.perfCard}>
          <View style={styles.perfRow}>
            <View style={styles.donutWrap}>
              <Svg width={80} height={80} viewBox="0 0 80 80">
                <Circle cx="40" cy="40" r="30" fill="none" stroke="#f0f2f8" strokeWidth="10" />
                <Circle
                  cx="40" cy="40" r="30"
                  fill="none" stroke="#5b6af0" strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  rotation="-90"
                  origin="40, 40"
                />
              </Svg>
              <View style={styles.donutLabel}>
                <Text style={styles.donutLabelText}>90%</Text>
              </View>
            </View>
            <View style={styles.perfInfo}>
              <Text style={styles.perfTitle}>Monthly Goal</Text>
              <Text style={styles.perfVal}>Rs 1,20,400</Text>
              <Text style={styles.perfChange}>↑ 90% of target</Text>
            </View>
          </View>

          <View style={styles.perfBarRow}>
            <View>
              <View style={styles.perfBarLabel}>
                <Text style={styles.perfBarLabelText}>New Customers</Text>
                <Text style={styles.perfBarLabelText}>72%</Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, { width: '72%' }]} />
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <View style={styles.perfBarLabel}>
                <Text style={styles.perfBarLabelText}>Returning</Text>
                <Text style={styles.perfBarLabelText}>55%</Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, styles.barFillRed, { width: '55%' }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Lead Optimizations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Lead Optimizations</Text>
          <Text style={styles.sectionLink}>View All ›</Text>
        </View>
        <View style={styles.chartCard}>
          <View style={styles.barChart}>
            {barData.map((d, i) => (
              <View key={i} style={styles.barCol}>
                <View
                  style={[
                    styles.barItem,
                    d.a ? styles.barItemAccent : styles.barItemPrimary,
                    { height: d.h * 70 },
                  ]}
                />
                <Text style={styles.barDay}>{days[i]}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Orders */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <Text style={styles.sectionLink}>See All ›</Text>
        </View>
        <View style={styles.ordersList}>
          {orderList.map((o, i) => (
            <TouchableOpacity key={i} style={styles.orderItem}>
              <View style={[styles.orderIcon, { backgroundColor: o.bg }]}>
                <Text style={styles.orderIconText}>{o.icon}</Text>
              </View>
              <View style={styles.orderInfo}>
                <Text style={styles.orderName}>{o.name}</Text>
                <Text style={styles.orderDate}>{o.date}</Text>
              </View>
              <View style={styles.orderRight}>
                <Text style={styles.orderAmt}>{o.amt}</Text>
                <View style={[styles.orderBadge, { backgroundColor: o.bc }]}>
                  <Text style={[styles.orderBadgeText, { color: o.btc }]}>{o.badge}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {bnavItems.map((b, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.bnavBtn, activeBnav === i && styles.bnavBtnActive]}
            onPress={() => setActiveBnav(i)}
          >
            <Text style={styles.bnavIcon}>{b.icon}</Text>
            <Text style={[styles.bnavLabel, activeBnav === i && styles.bnavLabelActive]}>
              {b.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f8',
  },

  // Overlay
  overlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(26,29,46,0.4)',
    zIndex: 20,
  },

  // Side Nav
  sidenav: {
    position: 'absolute', top: 0, left: 0, bottom: 0,
    width: 270,
    backgroundColor: '#fff',
    zIndex: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#1e2850',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.13,
    shadowRadius: 20,
    elevation: 10,
    paddingTop: 60,
    paddingBottom: 30,
  },
  navClose: {
    position: 'absolute', top: 52, right: 18,
    width: 32, height: 32,
    borderRadius: 16,
    backgroundColor: '#f4f5fb',
    alignItems: 'center', justifyContent: 'center',
  },
  navCloseText: { fontSize: 14, color: '#8b8fa8' },
  navProfile: {
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eaecf4',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  navAvatar: {
    width: 64, height: 64,
    borderRadius: 32,
    backgroundColor: '#e8445a',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#e8445a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  navAvatarText: { fontSize: 22, fontWeight: '700', color: '#fff' },
  navName: { fontSize: 15, fontWeight: '600', color: '#1a1d2e' },
  navEmail: { fontSize: 12, color: '#8b8fa8', marginTop: 2 },
  navLinks: { flex: 1, paddingVertical: 10 },
  navItem: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 13, paddingHorizontal: 22,
    marginHorizontal: 10, marginVertical: 2,
    borderRadius: 14,
  },
  navItemActive: { backgroundColor: '#ffeef1' },
  navIcon: {
    width: 36, height: 36,
    borderRadius: 10,
    backgroundColor: '#f4f5fb',
    alignItems: 'center', justifyContent: 'center',
    marginRight: 14,
  },
  navIconActive: { backgroundColor: '#ffd6dc' },
  navIconText: { fontSize: 16 },
  navItemText: { fontSize: 14, fontWeight: '500', color: '#8b8fa8', flex: 1 },
  navItemTextActive: { color: '#e8445a', fontWeight: '600' },
  navChevron: { fontSize: 14, color: '#8b8fa8', opacity: 0.5 },
  navSettingsWrap: {
    paddingHorizontal: 20, paddingTop: 10,
    borderTopWidth: 1, borderTopColor: '#eaecf4',
  },

  // Dashboard
  dashboard: { flex: 1, paddingTop: 10 },

  // Top Bar
  topbar: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10,
  },
  menuBtn: {
    width: 38, height: 38,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  menuLine: {
    width: 16, height: 2,
    backgroundColor: '#1a1d2e',
    borderRadius: 2,
    marginVertical: 2,
  },
  topbarTitle: { fontSize: 18, fontWeight: '700', color: '#1a1d2e', flex: 1 },
  topbarAvatar: {
    width: 36, height: 36,
    borderRadius: 18,
    backgroundColor: '#e8445a',
    alignItems: 'center', justifyContent: 'center',
  },
  topbarAvatarText: { fontSize: 12, fontWeight: '700', color: '#fff' },

  // Greeting
  greeting: { paddingHorizontal: 20, paddingBottom: 18, paddingTop: 4 },
  greetingSub: { fontSize: 13, color: '#8b8fa8' },
  greetingName: { fontSize: 22, fontWeight: '700', color: '#1a1d2e', marginTop: 2 },

  // Stat Cards
  cardsRow: {
    flexDirection: 'row', gap: 12,
    paddingHorizontal: 20, marginBottom: 18,
  },
  statCard: {
    flex: 1, borderRadius: 18, padding: 16,
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1, shadowRadius: 16,
    elevation: 4,
  },
  statCardAccent: { backgroundColor: '#5b6af0' },
  statCardPrimary: { backgroundColor: '#e8445a' },
  statLabel: { fontSize: 11, fontWeight: '500', color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  statValue: { fontSize: 22, fontWeight: '700', color: '#fff' },
  statChange: { fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 4 },

  // Section Header
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, marginBottom: 12,
  },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1a1d2e' },
  sectionLink: { fontSize: 12, color: '#5b6af0', fontWeight: '500' },

  // Performance Card
  perfCard: {
    marginHorizontal: 20, marginBottom: 18,
    backgroundColor: '#fff', borderRadius: 20, padding: 18,
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1, shadowRadius: 16,
    elevation: 4,
  },
  perfRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  donutWrap: { width: 80, height: 80 },
  donutLabel: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center', justifyContent: 'center',
  },
  donutLabelText: { fontSize: 16, fontWeight: '700', color: '#5b6af0' },
  perfInfo: { flex: 1 },
  perfTitle: { fontSize: 12, color: '#8b8fa8', marginBottom: 4 },
  perfVal: { fontSize: 20, fontWeight: '700', color: '#1a1d2e' },
  perfChange: { fontSize: 12, color: '#4cc77a', fontWeight: '500', marginTop: 2 },
  perfBarRow: { marginTop: 16 },
  perfBarLabel: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  perfBarLabelText: { fontSize: 12, color: '#8b8fa8' },
  barBg: { height: 6, backgroundColor: '#f0f2f8', borderRadius: 10, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 10, backgroundColor: '#5b6af0' },
  barFillRed: { backgroundColor: '#e8445a' },

  // Bar Chart
  chartCard: {
    marginHorizontal: 20, marginBottom: 18,
    backgroundColor: '#fff', borderRadius: 20, padding: 18,
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1, shadowRadius: 16,
    elevation: 4,
  },
  barChart: { flexDirection: 'row', alignItems: 'flex-end', height: 80, gap: 6 },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  barItem: { width: '100%', borderRadius: 5 },
  barItemPrimary: { backgroundColor: '#e8445a' },
  barItemAccent: { backgroundColor: '#5b6af0' },
  barDay: { fontSize: 9, color: '#8b8fa8', marginTop: 4 },

  // Orders
  ordersList: { marginHorizontal: 20, gap: 10 },
  orderItem: {
    backgroundColor: '#fff', borderRadius: 16, padding: 14,
    flexDirection: 'row', alignItems: 'center', gap: 12,
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8,
    elevation: 2,
  },
  orderIcon: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  orderIconText: { fontSize: 18 },
  orderInfo: { flex: 1 },
  orderName: { fontSize: 13, fontWeight: '600', color: '#1a1d2e' },
  orderDate: { fontSize: 11, color: '#8b8fa8', marginTop: 2 },
  orderRight: { alignItems: 'flex-end' },
  orderAmt: { fontSize: 14, fontWeight: '700', color: '#1a1d2e' },
  orderBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, marginTop: 4 },
  orderBadgeText: { fontSize: 10, fontWeight: '600' },

  // Bottom Nav
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10, paddingHorizontal: 10,
    borderTopWidth: 1, borderTopColor: '#eaecf4',
    shadowColor: '#1e2850',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06, shadowRadius: 10,
    elevation: 10,
  },
  bnavBtn: {
    alignItems: 'center', paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 12,
  },
  bnavBtnActive: { backgroundColor: '#ffeef1' },
  bnavIcon: { fontSize: 20 },
  bnavLabel: { fontSize: 10, fontWeight: '600', color: '#8b8fa8', marginTop: 3 },
  bnavLabelActive: { color: '#e8445a' },
});