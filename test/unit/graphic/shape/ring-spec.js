const expect = require('chai').expect;
const Ring = require('../../../../src/graphic/shape/ring');
const Canvas = require('../../../../src/graphic/canvas');

const dom = document.createElement('canvas');
dom.id = 'canvas-ring';
document.body.appendChild(dom);

describe('Ring', function() {
  const canvas = new Canvas({
    el: 'canvas-ring',
    width: 200,
    height: 200
  });
  const ring = new Ring({
    attrs: {
      x: 100,
      y: 150,
      r: 50,
      r0: 30,
      lineWidth: 6,
      fill: '#223273',
      stroke: '#bfbfbf'
    }
  });

  it('init attr', function() {
    expect(ring.attr('lineWidth')).to.equal(6);
    expect(ring.attr('fill')).to.equal('#223273');
    expect(ring.attr('stroke')).to.equal('#bfbfbf');
  });

  it('draw', function() {
    canvas.add(ring);
    canvas.draw();
    expect(canvas.get('children').length).to.equal(1);
  });

  it('getBBox', function() {
    const bbox = ring.getBBox();
    expect(bbox.x).to.equal(50);
    expect(bbox.y).to.equal(100);
    expect(bbox.width).to.equal(100);
    expect(bbox.height).to.equal(100);
  });

  it('destroy', function() {
    ring.destroy();
    expect(canvas.get('children').length).to.equal(0);
  });
});
