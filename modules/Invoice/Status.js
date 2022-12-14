export const Flag = ({ payload: status }) => {
  function generateStatusCardColor() {
    if (status.toLowerCase() == 'paid')
      return { backgroundColor: 'rgba(51,214,159,0.1)', borderRadius: '6px' };

    if (status.toLowerCase() == 'pending')
      return { backgroundColor: 'rgba(255,143,0,0.1)', borderRadius: '6px' };

    if (status.toLowerCase() == 'draft')
      return { backgroundColor: 'rgba(55,59,83,0.1)', borderRadius: '6px' };
  }

  function generateStatusDotColor() {
    if (status.toLowerCase() == 'paid') return { backgroundColor: 'rgba(51,214,159,1)' };

    if (status.toLowerCase() == 'pending')
      return { backgroundColor: 'rgba(255,143,0,1)' };

    if (status.toLowerCase() == 'draft') return { backgroundColor: 'rgba(55,59,83,1)' };
  }

  function generateStatusTextColor() {
    if (status.toLowerCase() == 'paid') return { color: 'rgba(51,214,159,1)' };

    if (status.toLowerCase() == 'pending') return { color: 'rgba(255,143,0,1)' };

    if (status.toLowerCase() == 'draft') return { color: 'rgba(55,59,83,1)' };
  }

  return (
    <>
      <div
        className="w-25 h-10 flex justify-center items-center gap-2"
        style={generateStatusCardColor()}>
        <div className="w-2 h-2 rounded-full" style={generateStatusDotColor()}></div>
        <span className="font-bold body--1" style={generateStatusTextColor()}>
          {status}
        </span>
      </div>
    </>
  );
};

export const Card = (props) => {
  return (
    <div className="w-full p-6 bg-white-full flex justify-between items-center rounded-lg">
      <div className="w-full flex justify-between items-center">
        <span className="body--1 text-blue-lighter">Status</span>
        <Flag payload={props[0]} />
      </div>
    </div>
  );
};
