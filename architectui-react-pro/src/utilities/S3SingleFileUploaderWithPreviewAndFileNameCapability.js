// tslint:disable
// import { Spinner } from "@shopify/polaris";
import axios from 'axios';
import React from 'react';
import Dropzone from 'react-dropzone';
import Loader from 'react-loaders';
import * as S3Upload from 'react-s3-uploader/s3upload';
import { Button } from 'reactstrap';
import { API_ROOT } from './api-config';

export default class S3SingleFileUploaderWithPreviewAndFileNameCapability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: this.props.fileName,
      loading: false
    };
    this.onDrop = this.onDrop.bind(this);
    this.onDropRejected = this.onDropRejected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fileName !== this.props.fileName) {
      this.setState({ fileName: nextProps.fileName });
    }
  }

  handleProgress = (progress, textState, file) => {
    const { label } = this.props;

    this.props.onProgress && this.props.onProgress(progress, textState, file);
    if (textState === 'Upload completed') {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
  };

  handleError = (err, file) => {
    this.props.onError && this.props.onError(err, file);
  };

  handleFinish = (info, file) => {
    const params = {
      fileName: file.name,
      folderName: this.props.imageFolder
    };

    axios.get(`${API_ROOT}/api/s3/url`, { params }).then(data => {
      this.setState({ fileName: data.data });
      this.props.onChange(data.data);
    });
  };

  getSignedUrl = (file, callback) => {
    const params = {
      objectName: file.name,
      contentType: file.type,
      folderName: this.props.imageFolder
    };

    axios
      .get(`${API_ROOT}/api/s3/sign`, { params })
      .then(data => {
        callback(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  onDrop(files) {
    const options = {
      files,
      signingUrl: '/api/s3/sign',
      /* scrubFilename: (filename) => {
                return this.props.
            }, */
      getSignedUrl: this.getSignedUrl,
      server: API_ROOT,
      signingUrlQueryParams: { uploadType: 'avatar' },
      s3path: '',
      contentDisposition: 'auto',
      uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
      onFinishS3Put: this.handleFinish,
      onProgress: this.handleProgress,
      onError: this.handleError
    };
    // tslint:disable-next-line:no-unused-variable
    const upload = new S3Upload(options);
  }

  onDropRejected() {}

  render() {
    // If we already saved files they will be shown again in modal preview.
    const style = {
      addFileBtn: {
        marginTop: '15px'
      }
    };

    const { label, previewImageHeight, previewImageWidth } = this.props;

    const { fileName, loading } = this.state;
    let dropzoneRef;
    return (
      <div>
        <Dropzone
          style={{ display: 'none' }}
          ref={node => {
            dropzoneRef = node;
          }}
          accept={this.props.acceptedFiles.join(',')}
          onDrop={this.onDrop}
          onDropRejected={this.onDropRejected}
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {/* <div className="dropzone-content">
                <p>Drop files here.</p>
              </div> */}
            </div>
          )}
        </Dropzone>
        {fileName ? (
          <div
            style={{ position: 'relative' }}
            className="home-popup-upload-sec"
          >
            {this.props.acceptedFiles.includes('application/json') ? (
              <span>File Uploaded</span>
            ) : (
              <img
                src={fileName}
                alt=""
                style={{
                  maxWidth: previewImageWidth,
                  maxHeight: previewImageHeight
                }}
              />
            )}

            {/* } <img
                            src={require('./close_icon.png')}
                            height={'25px'} width={'25px'}
                            style={{ position: 'absolute', top: 0, cursor: 'pointer' }}
                            onClick={event => {
                                this.setState({ fileName: null });
                                this.props.onChange(null);
                            }} /> */}
            <i
              className="pe-7s-close"
              style={{
                position: 'absolute',
                top: 0,
                cursor: 'pointer',
                border: '1px solid #000',
                padding: '2px',
                fontSize: '10px'
              }}
              onClick={event => {
                this.setState({ fileName: null });
                this.props.onChange(null);
              }}
            />
          </div>
        ) : (
          <div>
            {loading ? (
              <Loader type="ball-clip-rotate" />
            ) : (
              <Button
                className="btn-shadow"
                // style={style.addFileBtn}
                color="primary"
                onClick={() => {
                  dropzoneRef.open();
                }}
              >
                {label}
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}
