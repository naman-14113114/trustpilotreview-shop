import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Article from './pages/Article';
import Legal from './pages/Legal';
import NewAdvertorial from './pages/NewAdvertorial';
import VideoAdvertorial from './pages/VideoAdvertorial';
import TherafaceComparison from './pages/TherafaceComparison';
import DeluxeskinComparison from './pages/DeluxeskinComparison';
import QureskincareComparison from './pages/QureskincareComparison';
import CurrentbodyComparison from './pages/CurrentbodyComparison';
import SiliconMaskWarning from './pages/SiliconMaskWarning';
import FloatingHeadWarning from './pages/FloatingHeadWarning';
import MissingColorsExpose from './pages/MissingColorsExpose';
import LedDensityScam from './pages/LedDensityScam';
import BrandNamePremium from './pages/BrandNamePremium';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog/:slug" element={<Article />} />
        <Route path="privacy" element={<Legal />} />
        <Route path="terms" element={<Legal />} />
        <Route path="disclosure" element={<Legal />} />
        <Route path="contact" element={<Legal />} />
      </Route>
      <Route path="/new-advertorial" element={<NewAdvertorial />} />
      <Route path="/best-led-face-mask-uk-2026" element={<VideoAdvertorial />} />
      <Route path="/best-led-face-mask-uk-2026-video-test" element={<VideoAdvertorial />} />
      <Route path="/theraface-vs-other-masks" element={<TherafaceComparison />} />
      <Route path="/deluxeskin-vs-buudy" element={<DeluxeskinComparison />} />
      <Route path="/qureskincare-vs-buudy" element={<QureskincareComparison />} />
      <Route path="/currentbody-vs-buudy" element={<CurrentbodyComparison />} />
      <Route path="/silicone-led-mask-dangers" element={<SiliconMaskWarning />} />
      <Route path="/floating-head-warning" element={<FloatingHeadWarning />} />
      <Route path="/missing-colors-expose" element={<MissingColorsExpose />} />
      <Route path="/led-density-scam" element={<LedDensityScam />} />
      <Route path="/brand-name-premium" element={<BrandNamePremium />} />
    </Routes>
  );
}

export default App;
