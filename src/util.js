function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

module.exports = {
    isMobile: isMobile
};
