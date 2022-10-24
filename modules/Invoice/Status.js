const Status = (props) => {
  function generateStatusCardColor() {
    if (props[0].toLowerCase() == 'paid')
      return { backgroundColor: 'rgba(51,214,159,0.3)', borderRadius: '6px' };

    if (props[0].toLowerCase() == 'pending')
      return { backgroundColor: 'rgba(255,143,0,0.3)', borderRadius: '6px' };

    if (props[0].toLowerCase() == 'draft')
      return { backgroundColor: 'rgba(55,59,83,0.3)', borderRadius: '6px' };
  }

  function generateStatusDotColor() {
    if (props[0].toLowerCase() == 'paid')
      return { backgroundColor: 'rgba(51,214,159,1)' };

    if (props[0].toLowerCase() == 'pending')
      return { backgroundColor: 'rgba(255,143,0,1)' };

    if (props[0].toLowerCase() == 'draft') return { backgroundColor: 'rgba(55,59,83,1)' };
  }

  function generateStatusTextColor() {
    if (props[0].toLowerCase() == 'paid') return { color: 'rgba(51,214,159,1)' };

    if (props[0].toLowerCase() == 'pending') return { color: 'rgba(255,143,0,1)' };

    if (props[0].toLowerCase() == 'draft') return { color: 'rgba(55,59,83,1)' };
  }

  return (
    <div
      className="w-25 h-10 flex justify-center items-center gap-2"
      style={generateStatusCardColor()}>
      <div className="w-2 h-2 rounded-full" style={generateStatusDotColor()}></div>
      <span className="font-bold body--1" style={generateStatusTextColor()}>
        {props[0]}
      </span>
    </div>
  );
};

export default Status;
