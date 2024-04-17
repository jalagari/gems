
/**
 * returns a decorator to decorate the field definition
 *
 * */
export default async function componentDecorator(fd) {
  const { ':type': type = '', fieldType } = fd;
  if (fieldType === 'file-input') {
    const module = await import('./components/file.js');
    return module.default;
  }
  if (type.endsWith('wizard')) {
    const module = await import('./components/wizard.js');
    return module.default;
  }
  if (fd.properties?.edsType === 'range') {
    try {
      const module = await import('./components/range/range.js');
      return module.default;
    } catch (e) {
      return null;
    }
  }
  return null;
}
