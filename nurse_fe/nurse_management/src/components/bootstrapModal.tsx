export interface IBootstrapModalProps {
  dataTargetId: string;
  header?: string;
  submitText?: string;
  children: React.ReactNode;
  hideFooter?: boolean;
  onSubmit?: () => void;
}

const BootstrapModal: React.FC<IBootstrapModalProps> = ({
  dataTargetId,
  header = "Title",
  submitText = "Save",
  hideFooter = false,
  children,
  onSubmit = () => {},
}) => {
  return (
    <div>
      <div
        className="modal fade"
        id={dataTargetId}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {header}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            {!hideFooter && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  {submitText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapModal;
